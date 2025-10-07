import { useFormContext } from 'react-hook-form';

import { ControlledFormItem } from '@/components/ui/form-item';
import { Input } from '@/components/ui/input';
import { MetapathwayType, Refresh } from '@/types/refresh';
import { Button } from '@/components/ui/button';
import { validationRules } from '@/components/refresh/dialogs/RefreshAllocatorValidationRules';
import { Label } from '@/components/ui/label';
import { MetapathwayTypeBadge } from '@/components/dashboard/components/MetapathwayTypeBadge';

export interface SetDatacapFormValues {
  dataCap: number;
  intent: 'approve' | 'reject';
}

interface SetDatacapFormStepProps {
  metapathwayType: MetapathwayType;
  dataCap?: number;
  toAddress?: string;
  onSubmit: (data: SetDatacapFormValues) => void;
  onCancel: () => void;
}

export const SetDatacapFormStep = ({
  metapathwayType,
  dataCap,
  toAddress,
  onSubmit,
  onCancel,
}: SetDatacapFormStepProps) => {
  const { control, handleSubmit } = useFormContext<SetDatacapFormValues>();
  const dataCapValidationRules = validationRules.dataCap();

  return (
    <form role="form" className="flex flex-col px-4 gap-4" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="flex flex-col gap-2 my-4">
        {toAddress ? (
          <div data-testid="to-address" className="flex flex-col gap-2 pb-6">
            <span>To:</span>
            <span className="text-muted-foreground break-all">{toAddress}</span>
          </div>
        ) : null}
        <div data-testid="allocator-type" className="flex flex-row justify-between">
          <Label>Allocator Type:</Label>
          <MetapathwayTypeBadge metapathwayType={metapathwayType} />
        </div>

        <ControlledFormItem
          className="w-full"
          name="dataCap"
          label="Datacap"
          control={control}
          rules={{
            required: dataCapValidationRules.required,
            min: dataCapValidationRules.min,
            max: dataCapValidationRules.max,
          }}
        >
          <Input
            type="number"
            defaultValue={dataCap}
            className="w-full rounded-lg bg-background pl-8"
          />
        </ControlledFormItem>
      </fieldset>

      <div className="flex justify-center gap-2">
        <Button type="submit" className="w-[150px]">
          APPROVE
        </Button>
        <Button type="submit" className="w-[150px]" onClick={onCancel}>
          CANCEL
        </Button>
      </div>
    </form>
  );
};
