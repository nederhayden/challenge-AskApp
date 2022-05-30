import { Button } from "@mui/material";

interface ButtonProps {
  name: String;
  width?: String;
  marginRight?: String;
  disabled?: boolean;
  variant?: any;
  onClick?: any;
}

export const ButtonComponent = ({
  name,
  variant,
  width,
  marginRight,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      size="medium"
      sx={{
        width: `${width}`,
        marginRight: `${marginRight}`,
        fontWeight: "bold",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};
