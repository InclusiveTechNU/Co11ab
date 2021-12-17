/*
 * Copyright 2020 Northwestern Inclusive Technology Lab
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var presentationRadios = document.querySelectorAll('input[type=radio][name="rp_presentation"]');
presentationRadios.forEach((radioButton) => {
    chrome.runtime.sendMessage({
        type: 'value_request',
        key: radioButton.id
    }, (response) => {
        radioButton.checked = response.value;
    });
    radioButton.onchange = () => {
        presentationRadios.forEach((newRadioButton) => {
            console.log(newRadioButton, newRadioButton.checked);
            chrome.runtime.sendMessage({
                type: 'value_set',
                key: newRadioButton.id,
                value: newRadioButton.checked
            });
        })
    }
});

var settingsPage = "relative_proximity";