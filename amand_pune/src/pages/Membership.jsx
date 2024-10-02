import PlanCard from "../components/PlanCard";
import Header from "../components/Header";

const Membership = () => {
  return (
    <div className="bg-bgColor min-h-screen flex flex-col gap-[2.6rem] justify-center items-center py-[5rem] px-[5rem]">
      <Header
        headerName="Membership"
        pageDesc="Membership in AMAND Pune is open to individuals from Manipur, regardless of religion or background, who are of legal age and either employed, self-employed, or retired. Members must adhere to the association's rules and can apply for different membership types: lifetime, regular, or honorary. Each membership type has specific criteria and fees, and applications require approval from the managing committee."
      />
      <div className="flex flex-col gap-[2.6rem] md:flex-row w-[18rem] md:w-[55rem]">
        <PlanCard
          name="Life"
          price="₹1000"
          planDesc="One-time membership fee of ₹1000. Additionally, a monthly subscription of ₹100 is required, which is subject to change as decided by the General Body. Membership is granted upon approval by the managing committee."
        />
        <PlanCard
          name="honorary"
          price="₹0"
          planDesc="No membership or admission fees required. Honorary membership is granted to individuals for distinguished service or high public esteem. Members can participate in General Body meetings but are not eligible to vote.."
          special="yes"
        />
        <PlanCard
          name="regular"
          price="₹200"
          planDesc="Yearly membership fee of ₹200. There is also a one-time admission fee of ₹50 and a monthly subscription of ₹100, which is amendable by the General Body. Membership is granted upon approval by the managing committee."
        />
      </div>
    </div>
  );
};

export default Membership;
