import HelloReact from "./components/01-hello/hello-react";
import HelloWorld from "./components/01-hello/hello-world";
import { Jsx1 } from "./components/02-jsx/jsx1";
import { Jsx2 } from "./components/02-jsx/jsx2";
import { Jsx3 } from "./components/02-jsx/jsx3";
import { Jsx4 } from "./components/02-jsx/jsx4";
import { Jsx5 } from "./components/02-jsx/jsx5";
import { Jsx6 } from "./components/02-jsx/jsx6";
import { Jsx7 } from "./components/02-jsx/jsx7";
import { Style1 } from "./components/03-styles/style1";
import { Style2 } from "./components/03-styles/style2";
import { Style3 } from "./components/03-styles/style3";
import { Style4 } from "./components/03-styles/style4";
import { Style5 } from "./components/03-styles/style5";
import { Clock1 } from "./components/04-clock1/clock1";
import Greetings from "./components/05-props/greetings";
import { Products } from "./components/05-props/products";
import { Clock2 } from "./components/06-clock2/clock2";
import { Image } from "./components/07-image/image";
import { Gallery } from "./components/08-image-gallery/gallery";
import { ProfileCard } from "./components/09-profile-card/profile-card";
import { ReactBootstrap } from "./components/10-bootstrap/react-bootstrap";
import { Icons } from "./components/11-icons/icons";
import { Event1 } from "./components/12-events/event1";
import { Event2 } from "./components/12-events/event2";
import { Shop } from "./components/13-shop/shop";
import { State } from "./components/14-state/state";
import { Stateless } from "./components/14-state/stateless";
import { Counter1 } from "./components/15-counter/counter1";
import { Counter2 } from "./components/15-counter/counter2";
import { UserList } from "./components/16-birthday/user-list";
import Useeffect1 from "./components/17-useeffect/useeffect1";
import { Useeffect3 } from "./components/17-useeffect/useeffect3";
import { Clock3 } from "./components/18-clock3/clock3";
import { CountryFilter } from "./components/19-country-filter/country-filter";
import { UseRef } from "./components/20-useref/useref";
import ClassComp from "./components/21-class-comp/class-comp";
import { ProductStore } from "./components/22-product-store/product-store";
import { Recipes } from "./components/23-recipes/recipes";
import { Parent } from "./components/24-child-to-parent/parent";
import { Form1 } from "./components/25-forms/form1";
import { Form2 } from "./components/25-forms/form2";
import { Form3 } from "./components/25-forms/form3";
import { Form4 } from "./components/25-forms/form4";
import { Form5 } from "./components/25-forms/form5";

const App = () => {
	return (
		<div>
			{/* <HelloWorld/> 
      <HelloReact/>
      <Jsx1/>
      <Jsx2/>
      <Jsx3/>
      <Jsx4/>
      <Jsx5/>
      <Jsx6/>
      <Jsx7/>
      <Style1 />
      <Style2/>
      <Style3 />
      <Style4/>
      <Style5 />
      <Clock1 />
      <Greetings/>
      <Products />
      <Clock2 textColor="yellow" bgColor="navy" />
			<Clock2 textColor="white" bgColor="black" hideTime={true} />
      <Image />
      <Gallery />
      <ProfileCard
				avatar="profile.jpg"
				name="Suzanne Doe"
				location="San Francisco, USA"
				followers={5423545}
				following={2300}
				shots={10}
			/>
      <ReactBootstrap/>
      <Icons/>
      <Event1 />
      <Event2 />
      <Shop />
      <Stateless/>
      <State/>
      <Counter1 />
      <Counter2 />
      <UserList/>
      <Useeffect1 />
      <Clock3/>
      <Useeffect3/>
      <CountryFilter />
      <UseRef />
      <ClassComp/>
      <ProductStore/>
      <Recipes/>
      <Parent/>
      <Form1/>
      <Form2/>
       <Form3/>
       <Form4 />
 */}
			<Form5 />
		</div>
	);
};

export default App;
