package demo4training.actions;

import com.opensymphony.xwork2.ActionSupport;
import demo4training.model.Rate;
import org.json.JSONObject;

public class RateAction extends ActionSupport {

    private String result;

    private double prev = 1.0;


    public String execute() {
        prev = Math.random() * 0.5 - 0.25 + prev;
        result = new JSONObject(new Rate(prev)).toString();
        return "json";
    }

    public String getResult() {
        return result;
    }

    public double getPrev() {
        return prev;
    }

    public void setPrev(double prev) {
        this.prev = prev;
    }
}
