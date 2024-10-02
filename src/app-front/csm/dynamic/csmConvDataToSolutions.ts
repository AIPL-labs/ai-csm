import { isUndefined, TypeBoxes, type TypeInfo } from "@mjtdev/engine";
import { CSM_CONVERSATION_TYPE_INFO } from "../CSM_CONVERSATION_TYPE_INFO";
import { updateCsmState } from "../CsmState";
import { AiplClients } from "../../../client/AiplClients";
import { getCurrentChat } from "../../../ui/chat/getCurrentChat";
import { KNOWN_SOLUTIONS } from "./KNOWN_SOLUTIONS";

export const csmConvDataToSolutions = (
  data: typeof CSM_CONVERSATION_TYPE_INFO.type,
  schema: TypeInfo["schema"]
) => {
  console.log("csmConvDataToSolutions: data", data);
  if (isUndefined(data)) {
    console.log("csmConvDataToSolutions: data is undefined");
  }
  const passed = CSM_CONVERSATION_TYPE_INFO.validate(data);
  console.log("csmConvDataToSolutions: passed", passed);

  updateCsmState((s) => {
    s.data.push(data);
    s.dataSchema.push({ data, schema });
  });
  findSolutions(data);
};

export type Solution = {
  name: string;
  description: string;
  whenToUse: string;
  parameters: TypeInfo;
};

const createNovelSolutionResponseTypeInfo = () => {
  return TypeBoxes.createTypeInfo((Type) => {
    return Type.Object(
      {
        solutionTypeDefinition: Type.String({
          description:
            "The TypeScript type definition that clearly combines KNOWN SOLUTIONS into a single type for an action to solve the current user problem",
        }),
      },
      { $id: "CombinedSolution" }
    );
  });
};
export const createSolutionTypesSystemMessage = () => {
  const schemas = KNOWN_SOLUTIONS.map((typeInfo) => typeInfo.schema);

  return [
    "KNOWN SOLUTION types:",
    ...schemas.map((schema) => {
      const typeInfo = TypeBoxes.schemaToTypeInfo(schema);
      return typeInfo.typeDeclaration;
    }),
  ].join("\n");
};

export const findSolutions = async (
  data: typeof CSM_CONVERSATION_TYPE_INFO.type
) => {
  const aiplClient = AiplClients.createAiplClient();

  const systemMessage = createSolutionTypesSystemMessage();

  const chatId = (await getCurrentChat())?.id;
  if (isUndefined(chatId)) {
    console.error("chatId is undefined");
    return;
  }

  const userMessage = [
    "Create a unique and simple CombinedSolution Typescript type that can be used as a message to another system to get what I want",
    "No intersection types, or references to to Types or non-serializable types, create a single type that can be used to solve the current user problem",
    "Valid typescript type only",
  ].join("\n");

  const novelTypeText = await aiplClient.ask({
    systemMessage,
    chatId,
    userMessage,
    toolConfig: createNovelSolutionResponseTypeInfo(),
  });
  console.log("novelType", novelTypeText);

  const novelTypeSchema = TypeBoxes.typeTextToSchema(novelTypeText);
  console.log("novelTypeInfo", novelTypeSchema);

  /* 
  
  email customer support and tell them I need 10 bolts and also include my recent bolt purchases 
  
  */
  {
    const userMessage = [
      `Object only! Create a unique ${novelTypeSchema.$id} object that can be used as a message to another system to get what I want`,
    ].join("\n");
    const novelSolution = await aiplClient.ask({
      chatId,
      userMessage,
      toolConfig: { schema: novelTypeSchema },
    });
    console.log("novelSolution", novelSolution);
    const json = JSON.parse(novelSolution);
    updateCsmState((s) => {
      s.data.push({ novelSolution: json, novelType: novelTypeText });
    });
  }
  // aiplClient.ask({toolConfig: {
  //   schema:
  // }})

  // return KNOWN_SOLUTIONS;
};
