import { createContext, useState } from "react";


export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [age, setAge] = useState("15-25");
  const [gender, setGender] = useState("Male")
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [chartData,setChartData]=useState(null)
  const [loading,setLoading]=useState(false)

  const stateObj={
    isAuthenticated,
    setIsAuthenticated,
    age,
    gender,
    setAge,
    setGender,
    dateRange,
    setDateRange,
    chartData,
    setChartData,
    loading,
    setLoading
  }

  return (
    <AppContext.Provider value={stateObj}>
      {children}
    </AppContext.Provider>
  );
};




