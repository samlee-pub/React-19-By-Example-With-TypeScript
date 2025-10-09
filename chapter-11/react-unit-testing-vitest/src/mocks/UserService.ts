/**
 * This module contains business logic services and domain models:
 *  - UserService: Handles API operations for user-related data
 *  - MathService: Provides mathematical operations
 *  - Dog: Domain model representing a Dog entity
 */
import axios from "axios";

/**
 * Service for handling user-related API operations
 *
 * This service provides methods to fetch phone data from RESTful APIs
 * using both native fetch and axios for demonstration purposes.
 */
export class UserService {
  //Fetches phone data using the native fetch API
  getPhones = async (id: number) => {
    const response = await fetch(
      `https://api.restful-api.dev/objects?id=${id}`,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = (await response.json()) as {
      id: string;
      name: string;
      data: object;
    }[];
    if (data.length !== 0) {
      return data[0];
    }
    throw new Error("Get phones error");
  };

  //Fetches phone data using Axios HTTP client
  getPhonesByAxios = async (id: number) => {
    const response = await axios.get(
      `https://api.restful-api.dev/objects?id=${id}`,
    );
    console.log(response);
    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }
    const data = response.data as {
      id: string;
      name: string;
      data: object;
    }[];
    if (data.length !== 0) {
      return data[0];
    }
    throw new Error("Get phones error");
  };
}

/**
 * Service for basic mathematical operations
 *
 * Provides fundamental arithmetic functions with proper error handling.
 * All methods are pure functions with no side effects.
 */
export class MathService {
  add = (a: number, b: number) => a + b;
  subtract = (a: number, b: number) => a - b;
  multiply = (a: number, b: number) => a * b;
  divide = (a: number, b: number) => {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  };
}

/**
 * Domain model representing a Dog
 *
 * Simple class demonstrating a domain entity with basic behavior.
 */
export class Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet = (): string => {
    return `Hi! My name is ${this.name}!`;
  };
}
