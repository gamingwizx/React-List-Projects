import styled from "styled-components";
const test = styled.li`
    display: flex;
    width: 100%;
    align-items: center;
    gap: calc(var(--spacing) / 2);
    padding: calc(var(--spacing) / 1.5) var(--spacing);
    border-radius: var(--border-radius);
    font-size: var(--fs-8);
    `

const SidebarRow = styled(test)`
    &:link,
    &:visited {
        color: var(--bg-blue-100);
    }

    &:hover {
        background-color: var(--bg-gray-100);
    }

    &:hover svg {
        color: var(--bg-blue-500);
        }
`


export default SidebarRow