import { Button, CoreButton } from "@duannx-poc-base-ui/core";
import {IconMono} from '@t1rearc-ui-base/component'

export default function ButtonComponent() {
  return (
    <div>
      <h3>This is button from MFE 1</h3>
      <Button onClick={() => {}}></Button>\
      <IconMono name="ChervonUpToggle" brand="aeg" />
      <CoreButton></CoreButton>
    </div>
  );
}
