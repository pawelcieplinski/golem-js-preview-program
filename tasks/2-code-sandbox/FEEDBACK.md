# Golem JS Preview Program Feedback Form

## Introduction
Thank you for taking the time to complete this Golem JS Preview Program task! 
We appreciate your effort in helping us gather valuable feedback and suggestions on how to improve the Golem Network. 
Please fill out the following form to provide your feedback and estimated completion times for each task step.

## Task: #2 - Code Sandbox

### Estimated completion time:
| Task Step                                                                        | Completion Time (in minutes) |
|----------------------------------------------------------------------------------|------------------------------|
| Convert the docker image to a GVMI image and publish it to receive an image hash | 60                           |
| Create an HTML template                                                          | 30                           |
| Add an execution code in Golem JS API                                            | 330                          |

### Feedback:
Please provide any feedback you have regarding each task step below:

#### Step 1: Convert the docker image to a GVMI image and publish it to receive an image hash

Creating a GVMI image isn't hard for the second time. However, without docker experience, it was a bit confusing how and what to create as the task demands having multiple hash images. It is mentioned that we can use provided node image, but I couldn't find it. I had to create my own.

#### Step 2: Create an HTML template

Provided HTML template is very basic, but I had no problems with extending it. You put `<script>` tag with url to api. I came to the conclusion that we should use it in that way, as a code in HTML file itself. It didn't work at first because of `unexpected token 'export'` error. I had to do some research to find out that I have to use `type="module"` in `<script>` tag.

#### Step 3: Add an execution code in Golem JS API

I faced multiple problems. The biggest was linked with Golem JS API. It is told in description that if I would like to use api through web, I have to install other version of Yagna Deamon. But it doesn't tell that it does not change anything without `--api-allow-origin` flag. I finally found that flag in one of the examples. I think that it should be mentioned in the task description. That finally handled issues with CORS policy. There are multiple link in new documentation which links to the old one and it is a bit confusing.

Using Golem API in browses is easy and great! The problem came with task itself. I had to do some research to find out how to use it with Golem JS API. I finally achieved only part of it. It took me some time to find understand how to execute node code from `run()` command. In my code I only handle that node created image, but task executioner is properly parametrize to handle multiple images.

Displaying results in HTML was easy. I had no problems with it. Task's return value is easy to use.

## General feedback:
Is there anything else you'd like to share about your experience 
completing this task or using the Golem Network in general? 

[ENTER YOUR FEEDBACK HERE]

### Suggestions for Improvement

[Insert any suggestions you have for improving the task or our ecosystem here]

Thank you for your feedback and for contributing to the Golem Network!
