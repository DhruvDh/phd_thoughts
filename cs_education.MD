# CS Education

## Teaching programming in the age of large LM based autocomplete

Large language model based autocomplete is a recent addition to IDEs (Copilot, CodeWhisperer, Codex). Copilot, for example, is good enough to implement entire operations in Data Structures based on their method name/documentation/comments.

The workflow is - 
1. Write a comment describing what needs to happen  
2. Trigger autocomplete
3. Select the appropriate option
4. Modify if need be

"1." is done by the instructors generally. 3. and 4. are done by the students. In my experience 4. is only needed 10-30% of the time. As low as 0% for data structure assignments; on account of how common they are within the copilot training dataset.

So, 3. is where the student does most of the work. Selecting the appropriate option is very different from thinking up and writing code. It essentially turns a code writing assignment into a code reading comprehension assignment.

So that leads to some interesting questions:
- Is it better for the student that most introductory assignments are program reading comprehension instead of writing?
  - If it's better, how can we adjust the curriculum or assessments to optimize for this?
  - If it's worse, how can we adjust the curriculum or assessments to avoid students using them?

## A Rust-based curriculum for CS education (Honors track)

A curriculum, surrounding tools (autograders, for visualization, etc.), policies, and assessment (, set of video lectures? Slides and video transcript as a textbook?) for honor's version of CS1,2,3 based on Rust.

Rust can be thought of as a modern C++, at the end of 1212 students might be working on Projects that look like this, while writing code as simple [as this.](https://github.com/mikaelmello/inquire/blob/main/examples/expense_tracker.rs) ![Interactive application in Rust](https://raw.githubusercontent.com/mikaelmello/inquire/main/assets/expense_tracker.gif)

I don't want to make an argument for why Rust here, but the skeleton of the argument I am imagining is:
- Excellent modern error messages and documentation.
- Designed with concurrent/parallel programming in mind.
- Very consistent, explainable syntax.
- Easy to go from Rust to Python/Javascript/C++ - three of the most used programming languages for courses after the introductory CS. I made a [Google Form](https://forms.gle/BYxheARrYfmoM4hh8) to help collect data to make my case, but I don't think it was ever sent out. 
- Low-level enough to properly teach data structures, computer architecture, parallel programming, etc. but also high-level enough for an easy and fun introduction to programming.
- Modern build/packaging tools mean that students can be productive for personal projects independent of provided boilerplate.

> I think the likelihood of this happening is very low, but I think it might be attractive to do as an Honor's version of the introductory CS courses, especially for students who've already done well in AP CS.

## Using Language Models to generate questions and activities suited to Adaptive learning for CS1,2,3

## A study of best practices and recommendations for asynchronously teaching CS1,2,3

## A [mymind](https://mymind.com/)-like search for all course content, a study of its effects

## Misc

- Microsoft also has a debug server protocol like their language server protocol.
    - Making visual debuggers should be trivial for simple languages like java. 
        - See https://github.com/hediet/vscode-debug-visualizer
        - The above doesn't work on any random Java code, but it's very easy to make it work for any Java code, especially if the visualization is displayed outside VSCode as a regular webpage
    - We should also be able to use the debugger as a code comprehension assessment. As we step through the code...
        - write down the correct value for each variable
        - or, select what happens from a list of options
- There is a project that syncs slide PDFs with recorded videos, to make a webpage where you can see them side-by-side. Clicking on a certain slide will take you to the place in the video the slide first appeared. 
    - See https://github.com/hediet/slideo
    - I think a version that outputs video chapter information that you can add to YouTube is much more practical, students can use that information to skip to the slide they're interested in.
- Generating subtitles from video lectures, to make the videos searchable. Searching for terms will return timestamps.
- A REPL for common canvas operations, so we don't need to bother navigating canvas to do them. 
    - REPLs don't always have to be on a terminal, we can have maybe a Slack bot that lets us send commands to the REPL, and show us the output.
    - A transformer trained to go from natural language, describing what canvas operation we want to do, and generating the corresponding REPL command.
