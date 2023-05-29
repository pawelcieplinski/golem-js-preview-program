# Golem JS Preview Program Feedback Form

## Introduction
Thank you for taking the time to complete this Golem JS Preview Program task! 
We appreciate your effort in helping us gather valuable feedback and suggestions on how to improve the Golem Network. 
Please fill out the following form to provide your feedback and estimated completion times for each task step.

## Task: #1 - Text2Speech

### Estimated completion time:
| Task Step                                                                                                    | Completion Time (in minutes) |
|--------------------------------------------------------------------------------------------------------------|------------------------------|
| Convert the docker image to a GVMI image and publish it to receive an image hash                             | 240                          |
| Modify a `main.mjs` script that will execute the text-2-speech conversion, available under the `npm run tts` | 120                          |

### Feedback:
Please provide any feedback you have regarding each task step below:

#### Step 1: Convert the docker image to a GVMI image and publish it to receive an image hash

While the process of converting Docker images to GVMI images is easy to perform, I faced problems with getting image hash to use it later on. It is well described in documentation, but for the first time it seems not intuitive that `--push` flag doesn't work for the first time but is applicable without any outcome that push itself didn't perform. Second thing I would recommend is to add possibility to get hash of the image after pushing it to the registry. It would be useful. I also faced some connection problems and timeouts while pushing the image to the registry. Although I don't know if it is a problem on my side or on the Golem side.

I must admit that while I missed the difference between launching command with `--push` flag while reading documentation, I successfully found solution for my problem while searching discord server.

#### Step 2: Modify a `main.mjs` script that will execute the text-2-speech conversion, available under the `npm run tts`

Following given instructions was easy and straightforward. I didn't face any problems with it. It was well described and easy to perform after finishing tutorial and seeing examples on your website. However, I would recommend to add some more examples of using Golem JS API. I think it would be useful for people who are not familiar with Golem and want to start using it. I felt that these were hidden in different places, and it would be great to have them in one place.

It was very good idea to add code snippet to use in `main.mjs` script. It was very helpful, and I didn't have to search for one to perform time to speech functionality which felt like secondary task to learning how Golem works in practice.

## General feedback:
Is there anything else you'd like to share about your experience 
completing this task or using the Golem Network in general? 

The task itself was well written. I'm a type of person who likes to learn by practice, so it would be great if there were more different and small examples how to use Golem API. Especially in documentation which I know is being rewritten to new one, but while there are many places of truth it is a little confusing in the end.  

### Suggestions for Improvement

[Insert any suggestions you have for improving the task or our ecosystem here]

Thank you for your feedback and for contributing to the Golem Network!
