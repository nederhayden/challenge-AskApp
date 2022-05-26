// react
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

interface ReportContextProps {
  questionsQtd: number | null;
  handleSetQuestionsQtd: (qtd: number) => void;
}

interface ReactContextProviderProps {
  children: ReactNode;
}

export const ReportContext = createContext<ReportContextProps>({
  questionsQtd: null,
  handleSetQuestionsQtd: () => null,
});

export const ReportContextProvider = ({
  children,
}: ReactContextProviderProps) => {
  const [questionsQtd, setQuestionsQtd] = useState<number | null>(null);

  const handleSetQuestionsQtd = useCallback(
    (qtd: number) => setQuestionsQtd(qtd),
    []
  );

  const reportContextValue = useMemo(() => {
    return {
      questionsQtd,
      handleSetQuestionsQtd,
    };
  }, [questionsQtd, handleSetQuestionsQtd]);

  return (
    <ReportContext.Provider value={reportContextValue}>
      {children}
    </ReportContext.Provider>
  );
};
