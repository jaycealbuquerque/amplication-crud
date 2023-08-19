/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateAgendaArgs } from "./CreateAgendaArgs";
import { UpdateAgendaArgs } from "./UpdateAgendaArgs";
import { DeleteAgendaArgs } from "./DeleteAgendaArgs";
import { AgendaCountArgs } from "./AgendaCountArgs";
import { AgendaFindManyArgs } from "./AgendaFindManyArgs";
import { AgendaFindUniqueArgs } from "./AgendaFindUniqueArgs";
import { Agenda } from "./Agenda";
import { AgendaService } from "../agenda.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Agenda)
export class AgendaResolverBase {
  constructor(
    protected readonly service: AgendaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Agenda",
    action: "read",
    possession: "any",
  })
  async _agendaItemsMeta(
    @graphql.Args() args: AgendaCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Agenda])
  @nestAccessControl.UseRoles({
    resource: "Agenda",
    action: "read",
    possession: "any",
  })
  async agendaItems(
    @graphql.Args() args: AgendaFindManyArgs
  ): Promise<Agenda[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Agenda, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Agenda",
    action: "read",
    possession: "own",
  })
  async agenda(
    @graphql.Args() args: AgendaFindUniqueArgs
  ): Promise<Agenda | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Agenda)
  @nestAccessControl.UseRoles({
    resource: "Agenda",
    action: "create",
    possession: "any",
  })
  async createAgenda(@graphql.Args() args: CreateAgendaArgs): Promise<Agenda> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Agenda)
  @nestAccessControl.UseRoles({
    resource: "Agenda",
    action: "update",
    possession: "any",
  })
  async updateAgenda(
    @graphql.Args() args: UpdateAgendaArgs
  ): Promise<Agenda | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Agenda)
  @nestAccessControl.UseRoles({
    resource: "Agenda",
    action: "delete",
    possession: "any",
  })
  async deleteAgenda(
    @graphql.Args() args: DeleteAgendaArgs
  ): Promise<Agenda | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}