import React from 'react';
import {
  useFloating,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useClick,
  useRole,
  useDismiss,
  useInteractions,
  safePolygon,
} from '@floating-ui/react';
import popOverStyles from '@site/src/components/tooltip.module.scss';

interface InteractivePopoverProps {
  children: React.ReactNode;         // The trigger element’s text or icon
  content: React.ReactNode;          // The content (MDX snippet) for the popover
}

export function InteractivePopover({children, content}: InteractivePopoverProps) {
  // Controls whether the popover is open
  const [open, setOpen] = React.useState(false);

  // Set up floating UI with basic positioning middleware
  const {x, y, refs, strategy, context} = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [
      offset(8), // margin between trigger & popover
      flip(),    // flip side if there's no space
      shift(),   // shift popover to remain in view
    ],
  });

  // Use Floating UI’s interaction hooks
  const hover = useHover(context, {
    // 'safePolygon()' helps keep the popover open if the mouse
    // briefly leaves the trigger/popover but returns quickly
    handleClose: safePolygon(),
  });
  const focus = useFocus(context);
  const click = useClick(context, { event: 'click' }); // can omit if you only want hover
  const role = useRole(context, { role: 'dialog' });   // aria role
  const dismiss = useDismiss(context);

  // Merge all the interactions
  const {getReferenceProps, getFloatingProps} = useInteractions([hover, focus, click, role, dismiss]);

  return (
    <>
      {/* Trigger element */}
      <span
        ref={refs.setReference}
        {...getReferenceProps({
          style: {
            cursor: 'pointer',
            borderBottom: '1px dotted currentColor',
            textDecoration: 'none',
          },
        })}
      >
        {children}
      </span>

      {/* Popover content */}
      {open && (
        <div
          className={popOverStyles.interactivepopover}
          ref={refs.setFloating}
          {...getFloatingProps({
            style: {
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              // Basic styling
              background: '#444',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: '8px',
              zIndex: 9999,
              width: 'max-content',
              maxWidth: '300px',
              boxShadow: '5px 5px 5px rgba(68, 68, 68, 0.5)',
            },
          })}
        >
          {content}
        </div>
      )}
    </>
  );
}
