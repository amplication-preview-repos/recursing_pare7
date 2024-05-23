/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AnalyticsEventService } from "../analyticsEvent.service";
import { AnalyticsEventCreateInput } from "./AnalyticsEventCreateInput";
import { AnalyticsEvent } from "./AnalyticsEvent";
import { AnalyticsEventFindManyArgs } from "./AnalyticsEventFindManyArgs";
import { AnalyticsEventWhereUniqueInput } from "./AnalyticsEventWhereUniqueInput";
import { AnalyticsEventUpdateInput } from "./AnalyticsEventUpdateInput";

export class AnalyticsEventControllerBase {
  constructor(protected readonly service: AnalyticsEventService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AnalyticsEvent })
  async createAnalyticsEvent(
    @common.Body() data: AnalyticsEventCreateInput
  ): Promise<AnalyticsEvent> {
    return await this.service.createAnalyticsEvent({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AnalyticsEvent] })
  @ApiNestedQuery(AnalyticsEventFindManyArgs)
  async analyticsEvents(
    @common.Req() request: Request
  ): Promise<AnalyticsEvent[]> {
    const args = plainToClass(AnalyticsEventFindManyArgs, request.query);
    return this.service.analyticsEvents({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AnalyticsEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async analyticsEvent(
    @common.Param() params: AnalyticsEventWhereUniqueInput
  ): Promise<AnalyticsEvent | null> {
    const result = await this.service.analyticsEvent({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AnalyticsEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAnalyticsEvent(
    @common.Param() params: AnalyticsEventWhereUniqueInput,
    @common.Body() data: AnalyticsEventUpdateInput
  ): Promise<AnalyticsEvent | null> {
    try {
      return await this.service.updateAnalyticsEvent({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AnalyticsEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAnalyticsEvent(
    @common.Param() params: AnalyticsEventWhereUniqueInput
  ): Promise<AnalyticsEvent | null> {
    try {
      return await this.service.deleteAnalyticsEvent({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
