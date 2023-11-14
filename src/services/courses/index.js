export const PostCourses = async (formData) => {

     try {
          const response = await fetch("/api/courses/courses-post", {
               method: "POST",
               headers: {
                    "content-type": "application/json",
               },
               body: JSON.stringify(formData),
          });

          const finalData = await response.json();

          return finalData;
     } catch (e) {
          console.log("error", e);
     }
}


export const GetCourses = async () => {
     try {
          const res = await fetch("http://localhost:3000/api/courses/courses-get-all", {
               method: "GET",

          });

          const data = await res.json();
          console.log(data);

          return data?.data;

     } catch (e) {
          console.log(e);
     }

}
export const Courses_By_id = async (id) => {
     try {
          const res = await fetch(`http://localhost:3000/api/courses/courses-by-id?id=${id}`, {
               method: "GET",
          });

          const data = await res.json();
          console.log(data);

          return data?.data;

     } catch (e) {
          console.log(e);
     }

}


