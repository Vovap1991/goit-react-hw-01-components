import {
  StatisticSection,
  StatisticTitle,
  StatisticList,
  StatisticListItem,
  randColor,
  StatisticLabel,
  StatisticPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title.toUpperCase() && (
        <StatisticTitle>{title.toUpperCase()}</StatisticTitle>
      )}
      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticListItem key={id} style={{ backgroundColor: randColor() }}>
            <StatisticLabel>{label}</StatisticLabel>
            <StatisticPercentage>{percentage}%</StatisticPercentage>
          </StatisticListItem>
        ))}
      </StatisticList>
    </StatisticSection>
  );
};
