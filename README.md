# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: missing error handling in route handlers.

The `bug.js` file shows an example of a route handler that is vulnerable to errors when an invalid user ID is provided. The `bugSolution.js` file provides a corrected version with proper error handling.

## Bug Description

The `bug.js` route handler fetches user data based on an ID from the URL parameter.  It lacks error handling for invalid IDs, potentially causing unexpected behavior, application crashes, or data leaks.  This is a common vulnerability in web applications.

## Solution

The `bugSolution.js` file demonstrates how to handle potential errors gracefully. It includes checks for invalid input and returns appropriate error responses instead of crashing or returning unexpected results.