interface ButtonProps {
  btn_class: string;
  action: () => void;
  children: string;
  disable?: boolean;
}

export default function Button({
  btn_class,
  action,
  children,
  disable,
}: ButtonProps) {
  return (
    <>
      <button
        type="button"
        className={btn_class}
        onClick={action}
        disabled={disable ? disable : undefined}
      >
        {children}
      </button>
    </>
  );
}
