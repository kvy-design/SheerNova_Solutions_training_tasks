import UserCard from "./components/UserCard";
import ProductList from "./components/ProductList";
import ToggleSection from "./components/ToggleSection";
import ReactLogo from "./assets/react.svg";
import NavBar from "./components/NavBar";
import Badge from "./components/Badge";
import NotificationBanner from "./components/NotificationBanner";
import FAQ from "./components/FAQ";
import StarRating from "./components/StarRating";
import Layout from "./components/Layout";
import Breadcrumb from "./components/Breadcrumb";
import Tag from "./components/Tag";
import Timeline from "./components/Timeline";
import PricingCard from "./components/PricingCard";
import AvtarFlow from "./components/AvtarFlow";
import avatar1 from './assets/avatar1.png';
import avatar2 from './assets/avatar2.png';
import avatar3 from './assets/avatar3.png';
import avatar4 from './assets/avatar4.png';
import avatar5 from './assets/avatar5.png';


function App() {
  const user = {
    name: "kavya",
    avatar: ReactLogo,
    role: "developer",
  };

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000,
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
    },
  ];

  const events = [
    {
      id: 1,
      date: "Jan 2024",
      description: "Started learning React",
    },
    {
      id: 2,
      date: "Mar 2024",
      description: "Built my first React project",
    },
    {
      id: 3,
      date: "Jun 2024",
      description: "Learned React hooks",
    },
  ];
  return (
    <>
      <UserCard name={user.name} avatar={user.avatar} role={user.role} />
      <ProductList products={products} />
      <ToggleSection title="About React">
        <h3>Hello React</h3>
        <p>React is a library of javascript</p>
      </ToggleSection>
      <NavBar />
      <Badge status="success" />
      <NotificationBanner />
      <FAQ />
      <StarRating rating={3} />
      <Layout>
        <h1>Welcome to my website</h1>
        <p>This is the main content.</p>
      </Layout>
      <Breadcrumb paths={["Home", "Products", "Laptops"]} />
      <Tag varients="success">Active</Tag>
      <Tag varients="error">Active</Tag>
      <Tag varients="info">Active</Tag>
      <Tag varients="neutral">Active</Tag>
      <Tag varients="warning">Active</Tag>
      <Timeline events={events} />
      <PricingCard
        name="Pro"
        price={999}
        popular={true}
        features={[
          "Unlimited projects",
          "Priority support",
          "Advanced analytics",
        ]}
      />
      <AvtarFlow
        max={3}
        avatars={[
          avatar1,
          avatar2,
          avatar3,
          avatar4,
          avatar5
        ]}
      />
    </>
  );
}

export default App;
