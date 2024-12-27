"use client";
import { submitAction } from "@/actions/forms";
import { useRef } from "react";

export default function Home() {
  let ref = useRef();
  return (
    <>
      <div className="w-2/3 mx-auto my-12">
        <form
          ref={ref}
          action={(e) => {
            submitAction(e);
            ref.current.reset();
          }}
        >
          <div>
            <label
              className="text-white mx-4"
              name="name"
              id="name"
              htmlFor="name"
            >
              Name
            </label>
            <input className="text-black" type="text" name="name" id="name" />
          </div>
          <div>
            <label
              className="text-white mx-4"
              name="add"
              id="add"
              htmlFor="add"
            >
              Address
            </label>
            <input className="text-black" type="text" name="add" id="add" />
          </div>
          <div>
            <button className="border border-white p-2">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
