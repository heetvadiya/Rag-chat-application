import {Injectable} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import {AzureChatOpenAI} from "@langchain/openai";
import { FewShotPromptTemplate, PromptTemplate } from "@langchain/core/prompts";

@Injectable()
export class ChatService {


  llm;
  prompt;
  prompt_template;

  examples = [
    { userReview: "This movie was horrible", stars: "1 star" },
    { userReview: "This movie was amazing", stars: "5 stars" },
    { userReview: "This movie was the best", stars: "5 stars" },
    { userReview: "This movie is okay", stars: "3 stars" },
    { userReview: "This movie is bad", stars: "2 stars" },
  ];


  constructor(private configService: ConfigService) {
    this.llm = new AzureChatOpenAI({
      model: 'gpt-4o',
      maxRetries: 2
    })

    this.prompt_template = PromptTemplate.fromTemplate("Review: {userReview}\n {stars}");

    this.prompt = new FewShotPromptTemplate({
      examples:this.examples,
      examplePrompt:this.prompt_template,
      prefix: "Given the following movie reviews, assign a star rating based on sentiment.\n",
      suffix: "Review: {userReview}\nstars:",
      inputVariables: ["userReview"],
    });

  }

  async getReply(userInput: string) {
    const formatted = await this.prompt.format({"userReview" : userInput})
    const reply =  await this.llm.invoke(formatted)
    return {"reply": reply.content as string};
  }

}

