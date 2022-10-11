import {
	Article,
	ButtonGroup,
	Document,
	Footer,
	FormField,
	FormLabel,
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
	Heading6,
	Link,
	Logo,
	OrderedList,
	OrderedListItem,
	Page,
	PageContent,
	PageHeader,
	Paragraph,
	PrimaryActionButton,
	SecondaryActionButton,
	SubtleButton,
	Textarea,
	Textbox,
	UnorderedList,
	UnorderedListItem,
} from '../components';

export default function Test() {
	return (
		<Document>
			<Page>
				<PageHeader>
					<Logo title="regels.overheid.nl" subtitle="Ministerie van Binnenlandse Zaken en Koninkrijksrelaties" />
				</PageHeader>
				<PageContent>
					{/* <Article style={{ '--utrecht-space-around': 1 }}> */}
					<Article>
						<Heading1>Heading 1</Heading1>
						<Heading2>Heading 2</Heading2>
						<Heading3>Heading 3</Heading3>
						<Heading4>Heading 4</Heading4>
						<Heading5>Heading 5</Heading5>
						<Heading6>Heading 6</Heading6>
						<Paragraph lead>
							&#39;Samen leven en wonen, in een democratische rechtsstaat, met een slagvaardig bestuur. BZK, duidelijk
							voor mensen&#39;. Dit is de missie van BZK.
						</Paragraph>
						<Paragraph>
							Het <Link href="https://rijskoverheid.nl/">ministerie van BZK</Link> borgt de kernwaarden van de
							democratie. BZK staat voor een goed en slagvaardig openbaar bestuur en een overheid waar burgers op kunnen
							vertrouwen. BZK draagt eraan bij dat burgers kunnen wonen in betaalbare, veilige en energiezuinige
							woningen in een buurt waar iedereen meetelt en meedoet en het prettig leven is.
						</Paragraph>
						<UnorderedList>
							<UnorderedListItem>Belangrijk punt</UnorderedListItem>
							<UnorderedListItem>Ook een belangrijk punt</UnorderedListItem>
						</UnorderedList>
						<Paragraph>In volgorde:</Paragraph>
						<OrderedList>
							<OrderedListItem>Belangrijkste punt</OrderedListItem>
							<OrderedListItem>Minder belangrijk punt</OrderedListItem>
						</OrderedList>
					</Article>
					<aside>
						<form>
							<FormField>
								<FormLabel htmlFor="name">Naam</FormLabel>
								<Textbox id="name" autoComplete="name" />
							</FormField>
							<FormField>
								<FormLabel htmlFor="message">Bericht</FormLabel>
								<Textarea id="message" />
							</FormField>
							<ButtonGroup>
								<PrimaryActionButton type="submit">Verzenden</PrimaryActionButton>
								<SecondaryActionButton type="submit">Opslaan</SecondaryActionButton>
								<SubtleButton type="reset" hint="warning">
									Annuleren
								</SubtleButton>
							</ButtonGroup>
							<Paragraph small>De kleine lettertjes...</Paragraph>
						</form>
					</aside>
				</PageContent>
				<Footer columns={[]}>Test</Footer>
			</Page>
		</Document>
	);
}
