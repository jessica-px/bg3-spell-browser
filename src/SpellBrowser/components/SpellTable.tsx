import {
  Checkbox,
  Tooltip,
  Table,
  Thead,
  Tr,
  Td,
  Tbody,
  Th,
  Link
} from "@chakra-ui/react";
import { CloseIcon, ExternalLinkIcon, NotAllowedIcon } from "@chakra-ui/icons";
import {
  SpellDefinition,
  ColumnVisibility,
  CharacterDefinition,
  Actions
} from "../../types";
import { TABLE_COLUMNS, GET_ACTION_ICON } from "../../constants";

type HeaderRowProps = {
  columnVisibility: ColumnVisibility;
  showEditCol: boolean;
};

const HeaderRow = (props: HeaderRowProps) => (
  <Thead>
    <Tr>
      {props.showEditCol && <Th />}
      {Object.keys(props.columnVisibility)
        .filter((colName) => props.columnVisibility[colName])
        .map((colName) => (
          <Th
            key={colName}
            position="sticky"
            top={0}
            backgroundColor="gray.800"
            borderBottom="solid white"
            borderColor="gray.700"
          >
            {colName}
          </Th>
        ))}
    </Tr>
  </Thead>
);

type BooleanIconProps = {
  isTrue: boolean;
};

const BooleanIcon = (props: BooleanIconProps) => {
  if (props.isTrue) {
    return <CloseIcon color="red.500" />;
  } else {
    return <NotAllowedIcon color="gray.500" />;
  }
};

type NullableFieldProps = {
  value: string | undefined;
};

const NullableField = (props: NullableFieldProps) => {
  return !props.value || props.value === "None" ? (
    <NotAllowedIcon color="gray.500" />
  ) : (
    props.value
  );
};

type TableRowProps = {
  characters: CharacterDefinition[];
  spell: SpellDefinition;
  columnVisibility: ColumnVisibility;
  editingCharacterId: string;
  toggleSpellForChar: () => void;
};

const TableRow = (props: TableRowProps) => {
  const columnDefinitions = {
    name: (
      <Link href={props.spell.url} isExternal>
        {props.spell.name} <ExternalLinkIcon />
      </Link>
    ),
    level: props.spell.level,
    "con.": <BooleanIcon isTrue={props.spell.concentration} />,
    utility: <NullableField value={props.spell.utility} />,
    target: props.spell.target,
    save: <NullableField value={props.spell.save} />,
    "repeat save": <BooleanIcon isTrue={props.spell.repeatSaves} />,
    duration: <NullableField value={props.spell.duration} />,
    damage: <NullableField value={props.spell.damage} />,
    action: GET_ACTION_ICON(props.spell.action),
    known: !!props.spell.knownBy?.length ? (
      props.spell.knownBy?.map(
        (id) => props.characters.find((char) => char.id === id)?.icon
      )
    ) : (
      <NotAllowedIcon color="gray.500" />
    ),
    classes: props.spell.classes.join(", ")
  };

  const visibleColumns = TABLE_COLUMNS.filter(
    (colName) => !!props.columnVisibility[colName]
  );

  const editingCharacter = props.characters.find(
    (char) => char.id === props.editingCharacterId
  );
  const charKnowsSpell = !!editingCharacter?.spells.includes(props.spell.name);

  return (
    <Tooltip label={props.spell.description} placement="bottom-start">
      <Tr>
        {!!editingCharacter && (
          <Td>
            <Checkbox
              isChecked={charKnowsSpell}
              onChange={props.toggleSpellForChar}
            />
          </Td>
        )}
        {visibleColumns.map((colName) => (
          <Td key={colName}>{columnDefinitions[colName]}</Td>
        ))}
      </Tr>
    </Tooltip>
  );
};

type SpellTableProps = {
  characters: CharacterDefinition[];
  spellDefList: SpellDefinition[];
  columnVisibility: ColumnVisibility;
  editingCharacterId: string;
  toggleSpellForChar: (charId: string, spellName: string) => void;
};

export const SpellTable = (props: SpellTableProps) => (
  <Table size="sm" overflowX="auto" overflowY="visible">
    <HeaderRow
      columnVisibility={props.columnVisibility}
      showEditCol={!!props.editingCharacterId}
    />
    <Tbody>
      {props.spellDefList.map((spell: SpellDefinition) => (
        <TableRow
          key={spell.name}
          characters={props.characters}
          spell={spell}
          columnVisibility={props.columnVisibility}
          editingCharacterId={props.editingCharacterId}
          toggleSpellForChar={() =>
            props.toggleSpellForChar(props.editingCharacterId, spell.name)
          }
        />
      ))}
    </Tbody>
  </Table>
);
