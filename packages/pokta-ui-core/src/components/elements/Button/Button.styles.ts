import { ButtonProps } from './Button.svelte';

const buttonStyles: Record<keyof ButtonProps, any> = {
  variant: {
    default: {
      color: 'var(--button--color-500)',
      background: 'transparent',
      border: '1px solid transparent',
      boxShadow: '0',
      hover: {
        color: 'var(--button--color-600)',
        background: 'var(--button--color-100)',
        border: '1px solid var(--button--color-100)',
        boxShadow: '0'
      },
      active: {
        color: 'var(--button--color-700)',
        background: 'var(--button--color-200)',
        border: '1px solid var(--button--color-200)',
        boxShadow: '0'
      }
    },
    fill: {
      color: 'white',
      background: 'var(--button--color-500)',
      border: '1px solid var(--button--color-500)',
      boxShadow: 'var(--pk-box-shadow-xs)',
      hover: {
        color: 'white',
        background: 'var(--button--color-600)',
        border: '1px solid var(--button--color-600)',
        boxShadow: 'var(--pk-box-shadow-sm)'
      },
      active: {
        color: 'white',
        background: 'var(--button--color-700)',
        border: '1px solid var(--button--color-700)',
        boxShadow: 'var(--pk-box-shadow-sm)'
      }
    },
    outline: {
      color: 'var(--button--color-600)',
      background: 'transparent',
      border: '1px solid var(--button--color-500)',
      boxShadow: '0',
      hover: {
        color: 'var(--button--color-600)',
        background: 'var(--button--color-100)',
        border: '1px solid var(--button--color-600)',
        boxShadow: '0'
      },
      active: {
        color: 'var(--button--color-700)',
        background: 'var(--button--color-200)',
        border: '1px solid var(--button--color-700)',
        boxShadow: '0'
      }
    },
    soft: {
      color: 'var(--button--color-600)',
      background: 'var(--button--color-100)',
      border: '1px solid var(--button--color-100)',
      boxShadow: '0',
      hover: {
        color: 'var(--button--color-600)',
        background: 'var(--button--color-200)',
        border: '1px solid var(--button--color-200)',
        boxShadow: '0'
      },
      active: {
        color: 'var(--button--color-700)',
        background: 'var(--button--color-300)',
        border: '1px solid var(--button--color-300)',
        boxShadow: '0'
      }
    }
  },
  size: {
    sm: {
      height: ' var(--pk-size-lg)',
      fontSize: 'var(--pk-font-size-xs)',
      paddingInline: 'var(--pk-space-sm)'
    },
    md: {
      height: 'var(--pk-size-xl)',
      fontSize: 'var(--pk-font-size-sm)',
      paddingInline: 'var(--pk-space-md)',
      lineHeight: 'var(--pk-line-height-md)'
    },
    lg: {
      height: 'calc(var(--pk-size-xxl) - var(--pk-size-xs))',
      fontSize: 'var(--pk-font-size-sm)',
      paddingInline: 'var(--pk-space-lg)'
    }
  },
  rounded: {
    default: 'var(--pk-border-radius-md)',
    full: 'var(--pk-border-radius-xl)',
    none: '0'
  },

  color: (color: ButtonProps['color']) => `
  --button--color-100:var(--pk-${color}-100);
  --button--color-200:var(--pk-${color}-200);
  --button--color-300:var(--pk-${color}-300);
  --button--color-400:var(--pk-${color}-400);
  --button--color-500:var(--pk-${color}-500);
  --button--color-600:var(--pk-${color}-600);
  --button--color-700:var(--pk-${color}-700);
  --button--color-800:var(--pk-${color}-800);
  --button--color-900:var(--pk-${color}-900);`
};

export default function generateButtonVars({
  size,
  variant,
  rounded,
  color
}: Partial<ButtonProps>) {
  if (!size || !variant || !rounded || !color) return '';
  return `
    ${buttonStyles.color(color)}
    --button--height:${buttonStyles.size[size].height};
    --button--font-size:${buttonStyles.size[size].fontSize};
    --button--padding-inline:${buttonStyles.size[size].paddingInline};
    --button--border-radius:${buttonStyles.rounded[rounded]};
    --button--color:${buttonStyles.variant[variant].color};
    --button--background:${buttonStyles.variant[variant].background};
    --button--border:${buttonStyles.variant[variant].border};
    --button--box-shadow:${buttonStyles.variant[variant].boxShadow};
    --button--hover--color:${buttonStyles.variant[variant].hover.color};
    --button--hover--background:${buttonStyles.variant[variant].hover.background};
    --button--hover--border:${buttonStyles.variant[variant].hover.border};
    --button--hover--box-shadow:${buttonStyles.variant[variant].hover.boxShadow};
    --button--active--color:${buttonStyles.variant[variant].active.color};
    --button--active--background:${buttonStyles.variant[variant].active.background};
    --button--active--border:${buttonStyles.variant[variant].active.border};
    --button--active--box-shadow:${buttonStyles.variant[variant].active.boxShadow};
    `;
}
