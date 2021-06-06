import React, {useEffect, useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {GenUtil} from '../utils/GenUtil';
import {Color} from '../values/color';

const {height} = GenUtil.getDimension();

const RawBottomSheet = ({
  component,
  modalVisible,
  onHideSheet,
  cancellable,
}: {
  component: any;
  modalVisible: boolean;
  cancellable: boolean;
  onHideSheet: any;
}) => {
  const refRBSheet = useRef();

  useEffect(() => {
    if (modalVisible) {
      refRBSheet.current.open();
    } else {
      refRBSheet.current.close();
    }
  }, [modalVisible]);

  return (
    <RBSheet
      height={height / 2}
      ref={refRBSheet}
      // openDuration={300}
      closeOnPressBack={cancellable}
      onClose={() => onHideSheet()}
      closeOnDragDown={cancellable}
      closeOnPressMask={cancellable}
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: Color.black,
        },
        wrapper: {
          backgroundColor: Color.transparent,
        },
        draggableIcon: {
          backgroundColor: Color.orange,
        },
      }}>
      {component}
    </RBSheet>
  );
};

export default RawBottomSheet;
