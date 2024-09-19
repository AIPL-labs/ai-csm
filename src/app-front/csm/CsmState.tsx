import { createState } from "@mjtdev/engine";
import JsonDisplay from "./common/JsonDisplay";

export const [useCsmState, updateCsmState, getCsmState] = createState({
  data: [] as unknown[],
});

export const useCsmDataToNodes = () => {
  const { data } = useCsmState();

  return data.map((item, index) => (
    <div key={index}>
      <JsonDisplay data={item} />
    </div>
  ));
};
