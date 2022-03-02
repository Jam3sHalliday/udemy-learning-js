# High Level Javascript Overview

## High level
Low level programming language like C need to manage the resources (ram, cpu) when high level language like Javascript or Python make it automatically, it's easy to learn but never fast like C

## Garbage Collector
A algorithm inside js engine automatically remove unused object out of computer memory

## Interpreted (just-in-time compiled)
Computer only understand 0 and 1, we simply write human-readable js code which is an abstraction over machine code, and it need to be translated to machine code, this compile phase is called INTERPRETED.

## Multi-paradigm
Paradigm: an approach and mindset of structuring code, which will direct your coding style and technique.  
Three popular paradigms are:  
- Procedural programming
- OOP
- Functional programming


## Prototype-based object-oriented
Almost everything in js is object except primitive values.  
We create an array is also a object inherited methods (push, ...)

## First class function
Function are simply treated as variables. We can pass them into other funcitons, and return them from functions

## Dynamic
JS dynamic data type

## Single threaded & Non-blocking event loop
1. What is concurrency?
   - Concurrency model: how the js engine handles multiple tasks happening at the same time
  
2. Why do we need that?
   - JS runs in one single thread so it can only do one thing at a time 
  
3. So what about a long-running task?
   - sound like it gonna block the single thread, however, we want non-blocking behavior!

4. How do we achieve that?
   - by using an event loop: tasks long running tasks, executes them in the "background", and puts them back in the main thread once they are finished.