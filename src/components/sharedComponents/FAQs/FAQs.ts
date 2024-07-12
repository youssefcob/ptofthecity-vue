interface FAQs {
    question: string,
    answer: string
}

const faqs = [
{
    question: "What is PtOfTheCity?",
    answer: `PtOfTheCity? is a platform that connects people with local events and activities happening in their city.`
},
{
    question: "How can I create an account?",
    answer: "To create an account, click on the 'Sign Up' button and fill out the required information."
},
{
    question: "How do I post an event?",
    answer: "To post an event, go to your account dashboard and click on the 'Create Event' button. Fill out the event details and submit it for review."
},
{
    question: "Can I edit or delete my posted events?",
    answer: "Yes, you can edit or delete your posted events from your account dashboard."
}

] as FAQs[];


export type { FAQs };
export { faqs };

