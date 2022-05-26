// react
import { useContext } from "react";

// context
import { ReportContext } from "../context/Report.context";

export const useReportContext = () => {
  const contextValue = useContext(ReportContext);

  return contextValue;
};
