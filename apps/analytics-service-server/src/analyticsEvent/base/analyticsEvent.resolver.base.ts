/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AnalyticsEvent } from "./AnalyticsEvent";
import { AnalyticsEventCountArgs } from "./AnalyticsEventCountArgs";
import { AnalyticsEventFindManyArgs } from "./AnalyticsEventFindManyArgs";
import { AnalyticsEventFindUniqueArgs } from "./AnalyticsEventFindUniqueArgs";
import { DeleteAnalyticsEventArgs } from "./DeleteAnalyticsEventArgs";
import { AnalyticsEventService } from "../analyticsEvent.service";
@graphql.Resolver(() => AnalyticsEvent)
export class AnalyticsEventResolverBase {
  constructor(protected readonly service: AnalyticsEventService) {}

  async _analyticsEventsMeta(
    @graphql.Args() args: AnalyticsEventCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AnalyticsEvent])
  async analyticsEvents(
    @graphql.Args() args: AnalyticsEventFindManyArgs
  ): Promise<AnalyticsEvent[]> {
    return this.service.analyticsEvents(args);
  }

  @graphql.Query(() => AnalyticsEvent, { nullable: true })
  async analyticsEvent(
    @graphql.Args() args: AnalyticsEventFindUniqueArgs
  ): Promise<AnalyticsEvent | null> {
    const result = await this.service.analyticsEvent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AnalyticsEvent)
  async deleteAnalyticsEvent(
    @graphql.Args() args: DeleteAnalyticsEventArgs
  ): Promise<AnalyticsEvent | null> {
    try {
      return await this.service.deleteAnalyticsEvent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
