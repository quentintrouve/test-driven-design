import { createStaminaSession } from "./index";
import { v4 as uuidv4 } from 'uuid'

it("Should pass", function() {
  expect(createStaminaSession()).toEqual({
    id: uuidv4(), 
    date: new Date(), 
    comments:""});
});