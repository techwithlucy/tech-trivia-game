import { Question } from "@/types/trivia";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    category: "AWS",
    question: "Which AWS service is used for scalable object storage?",
    options: ["Amazon EC2", "Amazon S3", "Amazon RDS", "Amazon VPC"],
    correctIndex: 1,
    explanation:
      "Amazon S3 (Simple Storage Service) stores any amount of data as objects inside buckets.",
  },
  {
    id: 2,
    category: "AWS",
    question: "Which AWS service lets you run code without provisioning servers?",
    options: ["AWS Lambda", "Amazon EC2", "Amazon ECS", "AWS Batch"],
    correctIndex: 0,
    explanation:
      "AWS Lambda is serverless compute — you upload code and it runs on demand without managing servers.",
  },
  {
    id: 3,
    category: "AWS",
    question: "What does the EC2 in Amazon EC2 stand for?",
    options: [
      "Elastic Code Compiler",
      "Electronic Compute Cluster",
      "Elastic Compute Cloud",
      "Edge Compute Container",
    ],
    correctIndex: 2,
    explanation:
      "EC2 stands for Elastic Compute Cloud, AWS's resizable virtual server offering.",
  },
  {
    id: 4,
    category: "Cloud",
    question:
      "Which cloud model delivers ready-to-use software over the internet?",
    options: ["IaaS", "PaaS", "SaaS", "FaaS"],
    correctIndex: 2,
    explanation:
      "SaaS (Software as a Service) delivers fully managed applications, like Gmail or Slack, over the web.",
  },
  {
    id: 5,
    category: "AWS",
    question: "Which AWS service is a managed relational database?",
    options: ["Amazon DynamoDB", "Amazon RDS", "Amazon S3", "Amazon Redshift"],
    correctIndex: 1,
    explanation:
      "Amazon RDS manages relational databases like PostgreSQL, MySQL and SQL Server for you.",
  },
  {
    id: 6,
    category: "AI",
    question: "In AI, what does the abbreviation LLM stand for?",
    options: [
      "Large Logic Machine",
      "Linear Learning Model",
      "Large Language Model",
      "Layered Logic Module",
    ],
    correctIndex: 2,
    explanation:
      "An LLM (Large Language Model) is trained on massive text data to understand and generate language.",
  },
  {
    id: 7,
    category: "AWS",
    question: "Which AWS service is a global content delivery network (CDN)?",
    options: ["Amazon CloudFront", "Amazon Route 53", "AWS Shield", "Amazon SNS"],
    correctIndex: 0,
    explanation:
      "Amazon CloudFront caches content at edge locations worldwide for fast, low-latency delivery.",
  },
  {
    id: 8,
    category: "AI",
    question:
      "In machine learning, a model that performs well on training data but poorly on new data is said to be doing what?",
    options: ["Underfitting", "Overfitting", "Normalizing", "Clustering"],
    correctIndex: 1,
    explanation:
      "Overfitting means the model memorized training data instead of learning patterns that generalize.",
  },
  {
    id: 9,
    category: "AWS",
    question: "Which AWS service provides a scalable DNS web service?",
    options: ["Amazon Route 53", "Amazon VPC", "AWS Direct Connect", "Amazon S3"],
    correctIndex: 0,
    explanation:
      "Amazon Route 53 is AWS's highly available and scalable Domain Name System (DNS) service.",
  },
  {
    id: 10,
    category: "Tech",
    question: "What does the abbreviation API stand for?",
    options: [
      "Applied Programming Interface",
      "Application Protocol Integration",
      "Application Programming Interface",
      "Automated Process Interface",
    ],
    correctIndex: 2,
    explanation:
      "An API (Application Programming Interface) defines how software components talk to each other.",
  },
];
