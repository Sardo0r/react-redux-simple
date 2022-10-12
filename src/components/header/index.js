import { BackpackIcon } from "@radix-ui/react-icons";

const { Container, Text, Group, Indicator } = require("@mantine/core");

const Header = () => {
	return (
		<Container size="xl">
			<Group position="apart">
				<Text weight={500} size={28}>
					Online shop
				</Text>
				<Indicator
					label={54}
					showZero={false}
					dot={false}
					overflowCount={999}
					inline
					size={22}>
					<BackpackIcon width={28} height={28} />
				</Indicator>
			</Group>
		</Container>
	);
};

export default Header;
