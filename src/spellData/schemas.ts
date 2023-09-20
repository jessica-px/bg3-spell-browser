import Joi from "joi";
import {
  UTILITIES,
  TARGETS,
  SAVES,
  SPELL_LEVELS,
  CLASSES,
  ACTIONS
} from "../constants";

export const spellSchema = Joi.object({
  name: Joi.string().required(),
  url: Joi.string().required(),
  level: Joi.valid(...SPELL_LEVELS).required(),
  classes: Joi.array()
    .items(Joi.valid(...CLASSES))
    .required(),
  duration: Joi.string(),
  utility: Joi.valid(...UTILITIES).required(),
  target: Joi.valid(...TARGETS).required(),
  concentration: Joi.bool().required(),
  save: Joi.valid(...SAVES).required(),
  repeatSaves: Joi.bool().required(),
  description: Joi.string(),
  known: Joi.bool(),
  damage: Joi.string(),
  action: Joi.valid(...ACTIONS).required()
});
