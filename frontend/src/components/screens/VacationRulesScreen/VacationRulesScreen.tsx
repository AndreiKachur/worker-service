import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Button from '../../common/Button';
import styles from './VacationRulesScreen.styles';

type VacationRulesProps = {
};

const VacationRules: React.FC<VacationRulesProps> = () => {
  const [showRules, setShowRules] = useState(false);

  return (
    <View>
      <Button onClick={() => setShowRules(!showRules)}>
        ПРАВИЛА ОФОРМЛЕНИЯ ОТПУСКОВ
      </Button>

      {showRules
        && (
          <View>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ullam aliquid id provident, doloremque placeat veritatis,
              alias natus adipisci at possimus repellat delectus quia eaque nam,
              accusantium blanditiis esse officia beatae?
          </Text>
          </View>
        )}
    </View>
  );
};

export default VacationRules;
