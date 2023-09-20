import { RadioChoice } from "../../types";

export type RadioValues = {
  type: "radio";
  value: RadioChoice;
};

export type CheckValues = {
  type: "check";
  values: string[];
};

export type InputStateValues = RadioValues | CheckValues;

export type InputState = { [key: string]: InputStateValues };
