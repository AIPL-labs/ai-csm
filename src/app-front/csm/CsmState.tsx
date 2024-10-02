import { createState, type TypeInfo } from "@mjtdev/engine";
import JsonDisplay from "./common/JsonDisplay";

export const [useCsmState, updateCsmState, getCsmState] = createState({
  data: [] as unknown[],
  dataSchema: [] as { data: unknown; schema: TypeInfo["schema"] }[],
});

export const useCsmDataToNodes = () => {
  const { data } = useCsmState();

  return data.map((item, index) => (
    <div key={index}>
      <JsonDisplay data={item} />
    </div>
  ));
};
