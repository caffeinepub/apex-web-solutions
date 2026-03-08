import Map "mo:core/Map";
import Array "mo:core/Array";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";

actor {
  type ContactLead = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let contactLeads = Map.empty<Nat, ContactLead>();
  var nextContactLeadId = 0;

  public shared ({ caller }) func submitContactLead(name : Text, email : Text, phone : Text, message : Text) : async () {
    let id = nextContactLeadId;
    if (name == "" or email == "" or message == "" or phone == "") {
      Runtime.trap("Name, email, phone and message must not be empty");
    };
    let contactLead = {
      id;
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };
    contactLeads.add(id, contactLead);
    nextContactLeadId += 1;
  };

  public query ({ caller }) func getAllContactLeads() : async [ContactLead] {
    contactLeads.values().toArray();
  };

  public query ({ caller }) func getContactLead(id : Nat) : async ContactLead {
    switch (contactLeads.get(id)) {
      case (null) { Runtime.trap("Contact lead with id " # id.toText() # " does not exist!") };
      case (?lead) { lead };
    };
  };
};
