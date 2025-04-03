import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function App ({children}: Props) {
  return <>{children}</>
}

export default App;