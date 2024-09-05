import { withClassName } from '@/common/with-class-name';

import * as Tooltip from '@radix-ui/react-tooltip';

export * from '@radix-ui/react-tooltip';

export const Content = withClassName(Tooltip.Content, [
  'text-popover-foreground overflow-hidden bg-white p-1 border border-gray-300',
]);

export const Arrow: React.FC<Tooltip.TooltipArrowProps> = (props) => {
  return (
    <Tooltip.Arrow asChild {...props}>
      <span className="relative -mt-[1px] h-0 w-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-300 after:absolute after:bottom-[1px] after:left-[-5px] after:h-0 after:w-0 after:border-l-[5px] after:border-r-[5px] after:border-t-[5px] after:border-l-transparent after:border-r-transparent after:border-t-white" />
    </Tooltip.Arrow>
  );
};
