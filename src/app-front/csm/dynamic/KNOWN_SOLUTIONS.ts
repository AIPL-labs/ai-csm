import { type TypeInfo, TypeBoxes } from "@mjtdev/engine";

export const KNOWN_SOLUTIONS: TypeInfo[] = [
  TypeBoxes.createTypeInfo((Type) =>
    Type.Object(
      {
        emailAddress: Type.String(),
        subject: Type.String(),
        message: Type.String(),
      },
      { $id: "EmailCustomerService" }
    )
  ),
  TypeBoxes.createTypeInfo((Type) =>
    Type.Object({ query: Type.String() }, { $id: "SearchSupportHistory" })
  ),
  TypeBoxes.createTypeInfo((Type) =>
    Type.Object(
      {
        customerID: Type.String(),
        issue: Type.String(),
      },
      { $id: "CreateSupportTicket" }
    )
  ),
  TypeBoxes.createTypeInfo((Type) =>
    Type.Object(
      {
        customerID: Type.String(),
        followUpDate: Type.String({ format: "date-time" }),
      },
      { $id: "ScheduleFollowUp" }
    )
  ),
  TypeBoxes.createTypeInfo((Type) =>
    Type.Object(
      {
        customerID: Type.String(),
        productID: Type.String(),
        feedback: Type.String(),
      },
      { $id: "RecordCustomerFeedback" }
    )
  ),
  TypeBoxes.createTypeInfo((Type) =>
    Type.Object(
      {
        customerID: Type.String(),
        orderID: Type.String(),
        newStatus: Type.String(),
      },
      { $id: "UpdateOrderStatus" }
    )
  ),
  TypeBoxes.createTypeInfo((Type) =>
    Type.Object(
      {
        customerID: Type.String(),
        refundAmount: Type.Number(),
        reason: Type.String(),
      },
      { $id: "ProcessRefund" }
    )
  ),
  TypeBoxes.createTypeInfo((Type) =>
    Type.Object(
      {
        customerID: Type.String(),
        newAddress: Type.String(),
      },
      { $id: "UpdateShippingAddress" }
    )
  ),
  TypeBoxes.createTypeInfo((Type) =>
    Type.Object(
      {
        customerID: Type.String(),
        issueID: Type.String(),
        escalationReason: Type.String(),
      },
      { $id: "EscalateSupportTicket" }
    )
  ),
  TypeBoxes.createTypeInfo((Type) =>
    Type.Object(
      {
        customerID: Type.String(),
        newSubscriptionLevel: Type.String(),
      },
      { $id: "UpdateSubscriptionLevel" }
    )
  ),
];
