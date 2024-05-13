import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const ToDoService = () => {
  const toDoData = useLoaderData() ;
  console.log(toDoData, 'to do data')


//   if (bookData.length <= 0) {
//     return <RelaventShow> </RelaventShow>;
//   }

  return (
    <div>
      <Helmet>
        {" "}
        <title>
          Service To Do | Simple service sharing web application
        </title>{" "}
      </Helmet>
      <h1> show all data which only i add and other purchase it </h1>
    </div>
  );
};

export default ToDoService;
