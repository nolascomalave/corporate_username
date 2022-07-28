# Username Generator
This function generates a unique username for a data collection containing usernames, using the user's first name and last name to retrieve it. For example, the name "Pedro Delgado" would return "delgadop" in case that username does not exist in the data set with which it is compared to verify its existence.

Usage
=============
####Javascript　

```javascript
var user: string = username('Pedro', 'Delgado', []);
// The value of "user" will be "delgadop"
```
