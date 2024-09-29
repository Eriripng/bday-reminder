import { Card, CardBody, Text } from '@chakra-ui/react'
import birthday_days from "../data/birthday_days.json"

const birthdays = birthday_days.map((birthday) => (
    <Text> {birthday.birthday_name} {birthday.birthday_day} </Text>
));

export function BdayCard() {
    return (
        <Card 
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        maxW="md"
        >
            <CardBody>
            <Text color={"white"}>
                {birthdays}
            </Text>
            </CardBody>
        </Card>
    )
}
