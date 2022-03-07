# Javascript Engine and Runtime

## **JS engine**
- is a program that executes js code.
- Every js engine contains a call stack and a heap
  - the call stack is where the code execute using something called execution context.
  - the heap is an unstructured memory pool store all the objects that our app needs.

<br/>
<br/>
    
### **Compilation vs Interpretation**
<br/>

**Compilation:** entire code is converted into machine code at once, and wrtten to a binary file that can be executed by a computer.
> Source code ---compilation---> Portable file: machine code ---execution---> program running  
> *execution can happen way after compilation

**Interpretation:** interpreter runs through the source code and executes it line by line

> Source code ----EXECUTION LINE BY LINE------> PROGRAM RUNNING
> * Code still needs to be converted to machine code (right before it's executed)
> * The problem with interpreted language is that they are much slower than compiled languages
> * JS is combined **compilation** and **interpretation** which is called just-in-time compilation

**Just-in-time (JIT) compilation:** entire code is converted into machine code at once and executed immediately (without portable file)
> Source code ---COMPILATION---> Machine code ---EXECUTION---> program running
> * Machine code is not a portable file
> * Execution happens immediately
> 
***

## **How JUST_IN_TIME compilation works**
<br />

### **1. When js code enter the engine**

<br/>

**Parsing the code:** parsed code to a data structure called **the abstract synxtax tree (AST)**
  - This works by first splitting up each line of code into pieces that are meaningful to the language (like const, function keywords) then saving all these pieces into the tree in structured way (this also check for syntax error).
  - The resulting tree will later be used to generate the machine code.

**Compilation:** take the generated AST, compile it into machine code and get executed right away (happen in call stack).
<br /> 

**EXECUTION**
- modern js engines have some pretty cleaver optimization strategies
- it create a very unoptimized version of machine code in the beginning so it can start executing as fast as possible
- Then in the background, the code is being optimized and recompiled during the already running program execution, it done multiple times
```
Parsing -> Compilation (create AST) ---> Execution (happen inside call stack)
                    |                       |
                    |                       |
                    --re-compile---Optimization (during execution)
```

> All this process happens inside some special threads inside the engine (cannot access by our code)
> It complely separate from the main thread

***
## **Runtime**
- is like a big box contain all the tools we need to use JS
- The heart of any js runtime is always a the engine

1. Web APIs: just like a tool box provides DOM, fetch api, ... help us access the window object.
2. Callback Queue: a data structure contain all the callback functions that are ready to be executed like onClick, ...
   - when a DOM get clicked, it trigger a onClick function
   - the callback function is put in the callback queue, when the callstack is empty, the callback func is passed to the stack to execute (event loop)