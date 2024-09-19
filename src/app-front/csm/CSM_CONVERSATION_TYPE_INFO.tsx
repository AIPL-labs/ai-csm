import { TypeBoxes } from "@mjtdev/engine";


export const CSM_CONVERSATION_TYPE_INFO = TypeBoxes.createTypeInfo((Type) => {
  return Type.Object(
    {
      sentiment: Type.String({
        description: "Sentiment of the conversation in a single phrase",
      }),
      intent: Type.String({
        description: "Intent of the conversation in a single phrase",
      }),
      needs: Type.Array(
        Type.Object({
          description: Type.String({
            description: "Needs of the conversation",
          }),
          urgency: Type.Number({
            description: "Urgency of the need from 0 to 100",
          }),
        })
      ),
      actions: Type.Array(
        Type.Object({
          action: Type.Union(
            ["email", "order", "phone"].map((t) => Type.Literal(t)),
            {
              description: "action to be taken",
            }
          ),
          parameters: Type.Object(
            {},
            { description: "parameters for the action if any" }
          ),
        }),
        {
          description: "Actions that the user requests to be taken",
        }
      ),
    },
    { $id: "ConversationState" }
  );
});
