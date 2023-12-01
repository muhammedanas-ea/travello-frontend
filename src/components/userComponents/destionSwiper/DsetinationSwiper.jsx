// Import tailwind Component section
// import {
//   // Card,
//   // CardHeader,
//   // CardBody,
//   Typography,
// } from "@material-tailwind/react";

// Import Style For Property Swiper Card
import "./DestinationSwiper.css";

export default function DestinationSwiper() {
  // const destination = [
  //   {
  //     image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  //     destionName: "Maharashtra",
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1523544545175-92e04b96d26b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGluZGlhJTIwcGxhY2VzfGVufDB8fDB8fHww",
  //     destionName: "Destination Name 2",
  //   },
  //   {
  //     image: "https://www.freepik.com/free-photo/valletta-waterfront-malta_7677891.htm#query=maharastra%20best%20place%20image&position=31&from_view=search&track=ais&uuid=f608e875-6351-4a27-9720-03a43a83cc30",
  //     destionName: "Destination Name 3",
  //   },
  //   {
  //     image: "https://img.freepik.com/free-photo/view-pushkar-lake-rajasthan-india_53876-65500.jpg?size=626&ext=jpg&ga=GA1.1.485076863.1694950702&semt=ais",
  //     destionName: "Destination Name 4",
  //   },
  // ];

  return (
    <div className="main-sparation">
      {/* <div className="contai-section">
        <div className="pb-6">
          <Typography  className="text-[#1e1e1e] font-fmaily">
            popular Destination
          </Typography>
        </div> */}
        {/* <div className="flex gap-6">
          {destination.map((items, index) => {

            const {image,destionName} = items

            return (
              <Card
                shadow={false}
                key={index}
                className="relative mt-5 grid  h-[20rem] w-full max-w-[300px] items-end justify-center overflow-hidden text-center"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[url(${image})] bg-cover bg-center`}
                >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                  <Typography
                    variant="h2"
                    color="white"
                    className="mb-6 font-medium leading-[1.5]"
                  >
                    {destionName}
                  </Typography>
                </CardBody>
              </Card>
            );
          })}
        </div> */}
      {/* </div> */}
    </div>
  );
}
