"use client";
import Button from "@/components/Core/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment } from "@/redux/slices/count.slice";
import { RootState } from "@/redux/store";
import { useGetPokemonQuery } from "@/services/pokemonAPI";
import React from "react";
import { useSelector } from "react-redux";

const ContactContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.countSlice);

  const { data, isLoading, isError } = useGetPokemonQuery({});
  console.log(data);
  return (
    <div>
      ContactContainer {count}
      <Button onClick={() => dispatch(increment())}>Click me</Button>
    </div>
  );
};

export default ContactContainer;
