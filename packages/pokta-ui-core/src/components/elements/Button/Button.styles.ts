import { ButtonProps } from './Button.svelte';

const buttonStyles = {
  variant: {
    default: {
      color: 'var(--button--color-500)',
      background: 'transparent',
      border: '1px solid transparent',
      boxShadow: '0',
      hover: {
        color: 'var(--button--color-500)',
        background: 'var(--button--color-50)',
        border: '1px solid var(--button--color-50)',
        boxShadow: '0'
      },
      active: {
        color: 'var(--button--color-600)',
        background: 'var(--button--color-100)',
        border: '1px solid var(--button--color-100)',
        boxShadow: '0'
      },
      disabled: {
        color: 'var(--button--color-300)',
        background: 'transparent',
        border: '1px solid transparent',
        boxShadow: '0'
      }
    },
    soft: {
      color: 'var(--button--color-500)',
      background: 'var(--button--color-50)',
      border: '1px solid var(--button--color-50)',
      boxShadow: '0',
      hover: {
        color: 'var(--button--color-500)',
        background: 'var(--button--color-100)',
        border: '1px solid var(--button--color-100)',
        boxShadow: '0'
      },
      active: {
        color: 'var(--button--color-500)',
        background: 'var(--button--color-200)',
        border: '1px solid var(--button--color-200)',
        boxShadow: '0'
      },
      disabled: {
        color: 'var(--button--color-300)',
        background: 'var(--button--color-50)',
        border: '1px solid var(--button--color-50)',
        boxShadow: '0'
      }
    },
    outline: {
      color: 'var(--button--color-500)',
      background: 'transparent',
      border: '1px solid var(--button--color-500)',
      boxShadow: '0',
      hover: {
        color: 'var(--button--color-500)',
        background: 'var(--button--color-50)',
        border: '1px solid var(--button--color-500)',
        boxShadow: '0'
      },
      active: {
        color: 'var(--button--color-500)',
        background: 'var(--button--color-100)',
        border: '1px solid var(--button--color-500)',
        boxShadow: '0'
      },
      disabled: {
        color: 'var(--button--color-400)',
        background: 'transparent',
        border: '1px solid var(--button--color-400)',
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
      },
      disabled: {
        color: 'white',
        background: 'var(--button--color-400)',
        border: '1px solid var(--button--color-400)',
        boxShadow: 'var(--pk-box-shadow-xs)'
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
      paddingInline: 'calc(var(--pk-space-md) - var(--pk-space-xs))',
      lineHeight: 'var(--pk-line-height-lg)'
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
  }
};

export default function generateButtonStyles({
  size,
  variant,
  rounded,
  color
}: Partial<ButtonProps>) {
  if (!size || !variant || !rounded || !color) return '';
  return `
    ${[50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
      .map((c) => `--button--color-${c}:var(--pk-${color}-${c});`)
      .join('\n')}
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
    --button--disabled--color:${buttonStyles.variant[variant].disabled.color};
    --button--disabled--background:${buttonStyles.variant[variant].disabled.background};
    --button--disabled--border:${buttonStyles.variant[variant].disabled.border};
    --button--disabled--box-shadow:${buttonStyles.variant[variant].disabled.boxShadow};
    `;
}
