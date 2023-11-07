import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";

export default function PropertyAddingDialog() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Add Property
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="">Its a simple dialog.</DialogHeader>
        <DialogBody className="max-h-[400px] overflow-y-auto">
          <form className="flex flex-col gap-3">
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Property name
              </Typography>
              <Input
                type="email"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>

            <div className="my-3">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium "
              >
                Per head rate
              </Typography>

              <Input className=" !border-t-blue-gray-200 focus:!border-t-gray-900" />
              <div className="my-4 grid grid-cols-2  gap-4">
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Number for rooms
                  </Typography>
                  <Input
                    type="email"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Maximum guest capacity
                  </Typography>
                  <Input
                    type="email"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  />
                </div>
              </div>
              <div className="my-4 grid grid-cols-2  gap-4">
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Select your property state
                  </Typography>
                  <select className="block appearance-none w-full bg-white border border-gray-500 hover:border-gray-400 px-4 py-2 pr-8 rounded-md leading-tight focus:outline-none focus:shadow-outline">
                    <option value="lowToHigh">kerala</option>
                    <option value="highToLow">karnadaka</option>
                  </select>
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Select your property location
                  </Typography>
                  <Input
                    type="email"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2  gap-4">
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Select your property type
                  </Typography>
                  <select className="block appearance-none w-full bg-white border border-gray-500 hover:border-gray-400 px-4 py-2 pr-8 rounded-md leading-tight focus:outline-none focus:shadow-outline">
                    <option value="lowToHigh">Villa</option>
                    <option value="highToLow">Cottage</option>
                    <option value="highToLow">Resort</option>
                    <option value="highToLow">Homestay</option>
                  </select>
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Mobile number
                  </Typography>
                  <Input
                    type="email"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  />
                </div>
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Amenities
              </Typography>
              <select className="block appearance-none w-full bg-white border border-gray-500 hover:border-gray-400 px-4 py-2 pr-8 rounded-md leading-tight focus:outline-none focus:shadow-outline">
                <option value="lowToHigh">Pool</option>
                <option value="highToLow">wifi</option>
              </select>
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Add property images
              </Typography>
              <Input
                type="file"
                accept="image/*"
                className=" !border-t-blue-gray-200 text-center focus:!border-t-gray-900"
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Describe your property
              </Typography>
              <Textarea />
            </div>
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Submit</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
